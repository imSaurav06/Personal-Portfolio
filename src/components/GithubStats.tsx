import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, BookOpen } from 'lucide-react';

interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export const GithubStats: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [stars, setStars] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch user profile
        const userRes = await fetch('https://api.github.com/users/imSaurav06');
        if (!userRes.ok) throw new Error('Failed to fetch user profile');
        
        const userData = await userRes.json();
        
        // Fetch repos to aggregate stars (limit page size to 100)
        const reposRes = await fetch('https://api.github.com/users/imSaurav06/repos?per_page=100');
        let starCount = 0;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            starCount = reposData.reduce((acc: number, repo: { stargazers_count: number }) => {
              return acc + (repo.stargazers_count || 0);
            }, 0);
          }
        }

        setProfile(userData);
        setStars(starCount);
        setError(false);
      } catch (err) {
        console.warn('GitHub API rate limit hit or profile not accessible. Hiding GitHub stats.', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Return null (hide section completely) if API fails, is rate-limited, or lacks valid statistics.
  if (error || (!loading && !profile)) {
    return null;
  }

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-8">
        <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Double safety check on public repository records
  if (profile && profile.public_repos === 0 && profile.followers === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Glowing visual accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <img 
              src={profile?.avatar_url} 
              alt="Saurav Kumar GitHub Avatar" 
              className="w-16 h-16 rounded-xl border border-blue-500/20 shadow-md"
              loading="lazy"
            />
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h4 className="font-display font-bold text-slate-800 dark:text-white">
                  {profile?.name || 'Saurav Kumar'}
                </h4>
                <a 
                  href={profile?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                  aria-label="GitHub Link"
                >
                  <Github size={16} />
                </a>
              </div>
              <p className="font-mono text-xs text-blue-500 mt-0.5">@{profile?.login}</p>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md">
                {profile?.bio || 'Full Stack & Deep Learning Developer'}
              </p>
            </div>
          </div>

          {/* Stat Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            {/* Repos */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-100/50 dark:bg-slate-900/40 text-center">
              <div className="flex items-center justify-center text-blue-500 mb-1">
                <BookOpen size={16} />
              </div>
              <span className="block font-display font-extrabold text-lg text-slate-800 dark:text-white leading-tight">
                {profile?.public_repos}
              </span>
              <span className="font-sans text-[10px] uppercase text-slate-500 tracking-wider">Repositories</span>
            </div>
            
            {/* Stars */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-100/50 dark:bg-slate-900/40 text-center">
              <div className="flex items-center justify-center text-purple-500 mb-1">
                <Star size={16} />
              </div>
              <span className="block font-display font-extrabold text-lg text-slate-800 dark:text-white leading-tight">
                {stars}
              </span>
              <span className="font-sans text-[10px] uppercase text-slate-500 tracking-wider">Total Stars</span>
            </div>

            {/* Followers */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-100/50 dark:bg-slate-900/40 text-center">
              <div className="flex items-center justify-center text-indigo-500 mb-1">
                <Users size={16} />
              </div>
              <span className="block font-display font-extrabold text-lg text-slate-800 dark:text-white leading-tight">
                {profile?.followers}
              </span>
              <span className="font-sans text-[10px] uppercase text-slate-500 tracking-wider">Followers</span>
            </div>

            {/* Following */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-blue-500/5 bg-slate-100/50 dark:bg-slate-900/40 text-center">
              <div className="flex items-center justify-center text-indigo-500 mb-1">
                <GitFork size={16} />
              </div>
              <span className="block font-display font-extrabold text-lg text-slate-800 dark:text-white leading-tight">
                {profile?.following}
              </span>
              <span className="font-sans text-[10px] uppercase text-slate-500 tracking-wider">Following</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default GithubStats;
