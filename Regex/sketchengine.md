# Sketchengine Problems

## Exercise 1:

> Enter a regexp that matches all the items in the first column (positive examples) but none
> of those in the second (negative examples). When you press "submit", you will see what matched.

| Positive | Negative |
| -------- | -------- |
| pit      | pt       |
| spot     | Pot      |
| spate    | peat     |
| slap     | two part |
| respite  |          |

### Regexp: (s|res)?(la)?p(\s|[a-o])t(e|wo)?
