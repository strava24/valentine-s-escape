import { ScrollArea } from "@/components/ui/scroll-area";

const YesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollArea className="h-screen">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
          <h1 className="mb-2 text-center text-4xl font-bold italic text-primary sm:text-6xl">
            You said Yes! 💕
          </h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Here's something I wanted to tell you…
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-foreground sm:text-xl">
            <p>
              [Your long message goes here. Replace this placeholder with your heartfelt words.]
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <p>
              [Continue your message here… keep adding paragraphs as needed. This page is designed to hold a very long message. ✨]
            </p>
          </div>

          <div className="mt-16 text-center text-3xl">💘</div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default YesPage;
