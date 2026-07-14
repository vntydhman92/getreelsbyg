export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src="/logo.png?v=1" 
      alt="GetReelsByG Logo" 
      className={className} 
    />
  );
}
