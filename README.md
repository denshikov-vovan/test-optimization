Reality of renders comes to state managment and element creation as to memoization and ref usage

memo + ref = best practise for overoptimization like this :)

App element must rerender as it holds "items" state - it rerenders every time it changes no matter what we do (we can moove this state management to another element but we will need to useContext or pass state to item-list anyway - that can trigger even more rerenders)

ListItem must allways render at least once as it is created on addition to "items" state
