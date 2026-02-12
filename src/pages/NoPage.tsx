const NoPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="mb-8 text-3xl font-bold text-primary sm:text-5xl">
        Wrong answer! Watch this 😤
      </h1>
      <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl" style={{ aspectRatio: "16/9" }}>
        {/* Replace the video ID below with your own YouTube video */}
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/Ccaz3yJhaVA?autoplay=1&loop=1&playlist=Ccaz3yJhaVA"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="mt-6 text-muted-foreground">Go <a href="/" className="text-primary underline hover:text-primary/90">back</a> and choose wisely next time 💘</p>
    </div>
  );
};

export default NoPage;
