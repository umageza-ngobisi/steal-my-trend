import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface UserProfileProps {
  className?: string;
  showDetails?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ className, showDetails = true }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent-purple p-[1px] flex-shrink-0">
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
          <User size={20} className="text-muted" />
        </div>
      </div>
      
      {showDetails && (
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold truncate">Alex Hunter</p>
          <p className="text-[10px] text-muted truncate">alex@example.com</p>
        </div>
      )}
      
      {showDetails && <ChevronRight size={14} className="text-muted-foreground" />}
    </div>
  );
};

export default UserProfile;
