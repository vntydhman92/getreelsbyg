export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="GetReelsByG Logo" 
      className={className} 
      onError={(e) => {
        // Fallback if the user hasn't uploaded the image yet
        e.currentTarget.style.display = 'none';
        const span = document.createElement('span');
        span.innerText = 'GetReelsByG';
        span.className = 'font-bold text-lg text-white';
        e.currentTarget.parentNode?.appendChild(span);
      }}
    />
  );
}
