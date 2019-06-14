# Animesearchr

Time spent: 3h 30 mins

Things left to do: protractor tests, complete unit tests

I added a few tslint rules, some of them aren't completely to my liking, I prefer x => x rather than (x) => x, but rules are rules.

Added husky to run ng lint as a precommit hook

Tried to split everything into components and adhere to a neat folder structure.
Things I'd like to spend more time on: remove the subscription in dashboard component and move it into an async pipe.

Dashboard and AnimeDetails are the only components that make calls. I can probably remove AnimeDetails from making a call, and just pass that data later on to the dialog when it's loaded and show a modal with a spinner instead.
