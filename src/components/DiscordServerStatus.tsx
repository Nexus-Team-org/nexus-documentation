'use client';

import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink } from 'lucide-react';

interface DiscordMember {
  id: string;
  username: string;
  discriminator: string;
  avatar: string | null;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  avatar_url?: string;
  game?: {
    name: string;
  };
}

interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite: string;
  presence_count: number;
  members: DiscordMember[];
}

export default function DiscordServerStatus(): JSX.Element {
  const [data, setData] = useState<DiscordWidgetData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://discord.com/api/guilds/1378467270833078363/widget.json');
        if (!response.ok) {
          throw new Error('Failed to fetch Discord widget data');
        }
        const widgetData = await response.json();
        setData(widgetData);
      } catch (err) {
        console.error('Error fetching Discord widget:', err);
        setError('Unable to load Discord status');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-2">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        {error || 'Unable to load Discord status'}
      </div>
    );
  }

  // Get specific users first, then sort the rest
  const priorityUsers = ['_orin_theonly', '.youssefsh'];
  
  const sortedMembers = [...data.members].sort((a, b) => {
    // Check if users are in the priority list
    const aIsPriority = priorityUsers.includes(a.username.toLowerCase());
    const bIsPriority = priorityUsers.includes(b.username.toLowerCase());
    
    // If both are priority, sort by their order in priorityUsers
    if (aIsPriority && bIsPriority) {
      return priorityUsers.indexOf(a.username.toLowerCase()) - priorityUsers.indexOf(b.username.toLowerCase());
    }
    // If only one is priority, it comes first
    if (aIsPriority) return -1;
    if (bIsPriority) return 1;
    
    // For non-priority users, sort by status then username
    if (a.status === 'offline' && b.status !== 'offline') return 1;
    if (a.status !== 'offline' && b.status === 'offline') return -1;
    return a.username.localeCompare(b.username);
  });

  // Get priority users and then fill the rest up to 3 members
  const priorityMembers = sortedMembers.filter(member => 
    priorityUsers.includes(member.username.toLowerCase())
  );
  
  const otherMembers = sortedMembers.filter(member => 
    !priorityUsers.includes(member.username.toLowerCase())
  ).slice(0, 3 - priorityMembers.length);
  
  const displayedMembers = [...priorityMembers, ...otherMembers];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          <span className="text-muted-foreground">#</span> {data.name}
        </h3>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{data.members.filter(m => m.status !== 'offline').length}</span> online
          </span>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        {displayedMembers.map((member) => (
          <div 
            key={member.id} 
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                {member.avatar_url ? (
                  <img 
                    src={member.avatar_url} 
                    alt={member.username} 
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400" />
                )}
                <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-card ${
                  member.status === 'online' ? 'bg-emerald-500' : 
                  member.status === 'idle' ? 'bg-yellow-500' : 
                  member.status === 'dnd' ? 'bg-red-500' : 'bg-gray-400'
                }`}></span>
              </div>
              <span className={`font-medium text-sm ${
                member.status === 'offline' ? 'text-muted-foreground' : 'text-foreground'
              }`}>
                {member.username}
              </span>
            </div>
            {member.game && (
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                {member.game.name}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        <a 
          href="https://discord.gg/ZrnyNxg8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
        >
          <span>Join Server</span>
          <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
        </a>
      </div>
    </div>
  );
}