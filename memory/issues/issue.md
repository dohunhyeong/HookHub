## Error Type
Console Error

## Error Message
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <RenderFromTemplateContext>
      <ScrollAndFocusHandler segmentPath={[...]}>
        <InnerScrollAndFocusHandler segmentPath={[...]} focusAndScrollRef={{apply:false, ...}}>
          <ErrorBoundary errorComponent={undefined} errorStyles={undefined} errorScripts={undefined}>
            <LoadingBoundary name="/" loading={null}>
              <HTTPAccessFallbackBoundary notFound={<SegmentViewNode>} forbidden={undefined} unauthorized={undefined}>
                <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<SegmentViewNode>} forbidden={undefined} ...>
                  <RedirectBoundary>
                    <RedirectErrorBoundary router={{...}}>
                      <InnerLayoutRouter url="/" tree={[...]} params={{}} cacheNode={{rsc:<Fragment>, ...}} ...>
                        <SegmentViewNode type="page" pagePath="page.tsx">
                          <SegmentTrieNode>
                          <ClientPageRoot Component={function Home} serverProvidedParams={{...}}>
                            <Home params={Promise} searchParams={Promise}>
                              <div
+                               className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-i..."
-                               className="jsx-f3dc46aed1689a3f relative min-h-screen overflow-hidden bg-gradient-to-b..."
                              >
                                <div
+                                 className="pointer-events-none fixed inset-0"
-                                 className="jsx-f3dc46aed1689a3f pointer-events-none fixed inset-0"
                                >
                                  <div
+                                   className="stars-small"
-                                   className="jsx-f3dc46aed1689a3f stars-small"
                                  >
                                  <div
+                                   className="stars-medium"
-                                   className="jsx-f3dc46aed1689a3f stars-medium"
                                  >
                                  <div
+                                   className="stars-large"
-                                   className="jsx-f3dc46aed1689a3f stars-large"
                                  >
                                <div
+                                 className="pointer-events-none fixed inset-0"
-                                 className="jsx-f3dc46aed1689a3f pointer-events-none fixed inset-0"
                                >
                                  <div
+                                   className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-..."
-                                   className="jsx-f3dc46aed1689a3f absolute left-1/4 top-0 h-96 w-96 animate-pulse ro..."
                                  >
                                  <div
+                                   className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse rounded-full bg-cyan..."
-                                   className="jsx-f3dc46aed1689a3f absolute right-1/4 top-1/3 h-96 w-96 animate-pulse..."
                                    style={{animationDelay:"1s"}}
                                  >
                                  <div
+                                   className="absolute bottom-0 left-1/2 h-96 w-96 animate-pulse rounded-full bg-indi..."
-                                   className="jsx-f3dc46aed1689a3f absolute bottom-0 left-1/2 h-96 w-96 animate-pulse..."
                                    style={{animationDelay:"2s"}}
                                  >
                                <div
+                                 className="relative z-10"
-                                 className="jsx-f3dc46aed1689a3f relative z-10"
                                >
                                  <header
+                                   className="border-b border-indigo-500/20 backdrop-blur-sm"
-                                   className="jsx-f3dc46aed1689a3f border-b border-indigo-500/20 backdrop-blur-sm"
                                  >
                                    <div
+                                     className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
-                                     className="jsx-f3dc46aed1689a3f mx-auto max-w-6xl px-4 py-12 sm:px-6"
                                    >
                                      <h1
+                                       className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-t..."
-                                       className="jsx-f3dc46aed1689a3f bg-gradient-to-r from-cyan-300 via-purple-300 ..."
                                      >
+                                       HookHub
                                      <p
+                                       className="mt-2 text-xl text-indigo-200/80"
-                                       className="jsx-f3dc46aed1689a3f mt-2 text-xl text-indigo-200/80"
                                      >
+                                       Discover Claude Code Hooks Across the Universe
                                  <main
+                                   className="mx-auto max-w-6xl px-4 py-8 sm:px-6"
-                                   className="jsx-f3dc46aed1689a3f mx-auto max-w-6xl px-4 py-8 sm:px-6"
                                  >
                                    <div
+                                     className="relative"
-                                     className="jsx-f3dc46aed1689a3f relative"
                                    >
                                      <input
                                        type="text"
                                        placeholder="Search the cosmos..."
                                        value=""
                                        onChange={function Home[<input>.onChange]}
+                                       className="w-full rounded-2xl border border-indigo-500/30 bg-slate-900/50 px-6..."
-                                       className="jsx-f3dc46aed1689a3f w-full rounded-2xl border border-indigo-500/30..."
                                      >
                                      <div
+                                       className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r f..."
-                                       className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded-2..."
                                      >
                                    <div
+                                     className="mt-6 flex flex-wrap gap-3"
-                                     className="jsx-f3dc46aed1689a3f mt-6 flex flex-wrap gap-3"
                                    >
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         All
                                        <div
+                                         className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500/2..."
-                                         className="jsx-f3dc46aed1689a3f absolute inset-0 animate-pulse bg-gradient-t..."
                                        >
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Security
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Formatting
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Testing
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Notifications
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Workflow
                                      <button
                                        onClick={function Home[CATEGORIES.map() > <button>.onClick]}
+                                       className="group relative overflow-hidden rounded-full px-5 py-2.5 text-sm fon..."
-                                       className="jsx-f3dc46aed1689a3f group relative overflow-hidden rounded-full px..."
                                      >
                                        <span
+                                         className="relative z-10"
-                                         className="jsx-f3dc46aed1689a3f relative z-10"
                                        >
+                                         Other
                                    <div
+                                     className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
-                                     className="jsx-f3dc46aed1689a3f mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gr..."
                                    >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Block Dangerous Commands
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-r..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Security
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Prevents execution of destructive shell commands like rm -rf /, DROP TABLE, a...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/karanb192/claude-code-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Auto Prettier
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-c..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Formatting
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Automatically runs Prettier on files after Claude edits them, ensuring consis...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/johnlindquist/claude-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Pre-Commit Test Runner
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-e..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Testing
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Runs your test suite before Claude finishes a task, catching regressions earl...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/karanb192/claude-code-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Desktop Notifications
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-a..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Notifications
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Sends native desktop notifications when Claude completes long-running tasks s...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/disler/claude-code-hooks-mastery"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Environment Context Injection
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-p..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Workflow
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Automatically injects environment variables and project context at session st...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/johnlindquist/claude-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Python Syntax Validator
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-e..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Testing
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Validates Python files for syntax errors after every edit, preventing broken ...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/decider/claude-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Protected File Guard
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-r..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Security
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Blocks modifications to critical files like .env, lock files, and CI configs,...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/carlrannaberg/claudekit"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           ESLint Auto-Fix
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-c..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Formatting
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Runs ESLint with auto-fix on changed files after edits, keeping your code com...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/disler/claude-code-hooks-mastery"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Slack Notifications
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-a..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Notifications
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Posts updates to a Slack channel when Claude completes tasks, perfect for tea...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/karanb192/claude-code-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Git Auto-Stage
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-p..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Workflow
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Automatically stages changed files in git after Claude edits them, streamlini...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/carlrannaberg/claudekit"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           TypeScript Type Checker
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-e..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Testing
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Runs tsc --noEmit after edits to catch type errors immediately, ensuring type...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/johnlindquist/claude-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                      <div
+                                       className="group relative flex flex-col overflow-hidden rounded-2xl border bor..."
-                                       className="jsx-f3dc46aed1689a3f group relative flex flex-col overflow-hidden r..."
                                      >
                                        <div
+                                         className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-0 rounded..."
                                        >
                                        <div
+                                         className="relative z-10 flex items-start justify-between gap-3"
-                                         className="jsx-f3dc46aed1689a3f relative z-10 flex items-start justify-betwe..."
                                        >
                                          <h2
+                                           className="text-lg font-bold text-cyan-100 group-hover:text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f text-lg font-bold text-cyan-100 group-hove..."
                                          >
+                                           Prompt Logger
                                          <span
+                                           className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium bg-s..."
-                                           className="jsx-f3dc46aed1689a3f shrink-0 rounded-full border px-3 py-1 tex..."
                                          >
+                                           Other
                                        <p
+                                         className="relative z-10 mt-3 line-clamp-3 flex-1 text-sm leading-relaxed te..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-3 line-clamp-3 flex-1 text-..."
                                        >
+                                         Logs all prompts and responses to a local file for auditing, debugging, and r...
                                        <div
+                                         className="relative z-10 mt-5 flex items-center justify-between border-t bor..."
-                                         className="jsx-f3dc46aed1689a3f relative z-10 mt-5 flex items-center justify..."
                                        >
                                          <span
+                                           className="text-sm text-indigo-300/60"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/60"
                                          >
                                          <a
                                            href="https://github.com/decider/claude-hooks"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="flex items-center gap-1 text-sm font-medium text-cyan-300 trans..."
-                                           className="jsx-f3dc46aed1689a3f flex items-center gap-1 text-sm font-mediu..."
                                          >
                                            <span
+                                             className="text-lg"
-                                             className="jsx-f3dc46aed1689a3f text-lg"
                                            >
+                                             →
                                        <div
+                                         className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-..."
-                                         className="jsx-f3dc46aed1689a3f pointer-events-none absolute right-0 top-0 h..."
                                        >
                                  <footer
+                                   className="relative mt-20 border-t border-indigo-500/20 backdrop-blur-sm"
-                                   className="jsx-f3dc46aed1689a3f relative mt-20 border-t border-indigo-500/20 backd..."
                                  >
                                    <div
+                                     className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
-                                     className="jsx-f3dc46aed1689a3f mx-auto max-w-6xl px-4 py-12 sm:px-6"
                                    >
                                      <div
+                                       className="grid grid-cols-1 gap-8 md:grid-cols-3"
-                                       className="jsx-f3dc46aed1689a3f grid grid-cols-1 gap-8 md:grid-cols-3"
                                      >
                                        <div
-                                         className="jsx-f3dc46aed1689a3f"
                                        >
                                          <h3
+                                           className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-..."
-                                           className="jsx-f3dc46aed1689a3f bg-gradient-to-r from-cyan-300 to-purple-3..."
                                          >
+                                           HookHub
                                          <p
+                                           className="mt-3 text-sm leading-relaxed text-indigo-200/60"
-                                           className="jsx-f3dc46aed1689a3f mt-3 text-sm leading-relaxed text-indigo-2..."
                                          >
+                                           A curated directory of Claude Code hooks from across the developer universe...
                                        <div
-                                         className="jsx-f3dc46aed1689a3f"
                                        >
                                          <h4
+                                           className="text-sm font-semibold text-cyan-300"
-                                           className="jsx-f3dc46aed1689a3f text-sm font-semibold text-cyan-300"
                                          >
+                                           Resources
                                          <ul
+                                           className="mt-3 space-y-2"
-                                           className="jsx-f3dc46aed1689a3f mt-3 space-y-2"
                                          >
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://docs.anthropic.com/claude/docs"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Claude Documentation
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://github.com/anthropics/claude-code"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Claude Code GitHub
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://claude.ai"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Claude.ai
                                        <div
-                                         className="jsx-f3dc46aed1689a3f"
                                        >
                                          <h4
+                                           className="text-sm font-semibold text-cyan-300"
-                                           className="jsx-f3dc46aed1689a3f text-sm font-semibold text-cyan-300"
                                          >
+                                           Community
                                          <ul
+                                           className="mt-3 space-y-2"
-                                           className="jsx-f3dc46aed1689a3f mt-3 space-y-2"
                                          >
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Submit Your Hook
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Report an Issue
                                            <li
-                                             className="jsx-f3dc46aed1689a3f"
                                            >
                                              <a
                                                href="https://github.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
+                                               className="text-sm text-indigo-200/60 transition-colors hover:text-cya..."
-                                               className="jsx-f3dc46aed1689a3f text-sm text-indigo-200/60 transition-..."
                                              >
+                                               Contribute
                                      <div
+                                       className="mt-8 flex flex-col items-center justify-between gap-4 border-t bord..."
-                                       className="jsx-f3dc46aed1689a3f mt-8 flex flex-col items-center justify-betwee..."
                                      >
                                        <p
+                                         className="text-sm text-indigo-300/50"
-                                         className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/50"
                                        >
+                                         Built with Next.js, React, and Tailwind CSS
                                        <div
+                                         className="flex items-center gap-4"
-                                         className="jsx-f3dc46aed1689a3f flex items-center gap-4"
                                        >
                                          <a
                                            href="https://github.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
+                                           className="text-indigo-300/50 transition-colors hover:text-cyan-300"
-                                           className="jsx-f3dc46aed1689a3f text-indigo-300/50 transition-colors hover..."
                                          >
                                            <svg
+                                             className="h-5 w-5"
-                                             className="jsx-f3dc46aed1689a3f h-5 w-5"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092..."
                                                clipRule="evenodd"
-                                               className="jsx-f3dc46aed1689a3f"
                                              >
                                          <span
+                                           className="text-indigo-300/30"
-                                           className="jsx-f3dc46aed1689a3f text-indigo-300/30"
                                          >
+                                           •
                                          <p
+                                           className="text-sm text-indigo-300/50"
-                                           className="jsx-f3dc46aed1689a3f text-sm text-indigo-300/50"
                                          >
                                    <div
+                                     className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r..."
-                                     className="jsx-f3dc46aed1689a3f pointer-events-none absolute inset-x-0 bottom-0 ..."
                                    >
                                ...
                        ...
                      ...
          ...



    at div (<anonymous>:null:null)
    at Home (src/app/page.tsx:41:9)

## Code Frame
  39 |       {/* Animated starfield background */}
  40 |       <div className="pointer-events-none fixed inset-0">
> 41 |         <div className="stars-small"></div>
     |         ^
  42 |         <div className="stars-medium"></div>
  43 |         <div className="stars-large"></div>
  44 |       </div>

Next.js version: 16.1.6 (Turbopack)
