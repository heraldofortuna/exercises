# Sketchengine Problems

- Here are some exercises that test your ability to use regular expressions.
  [Sketchengine Website here!](https://regex.sketchengine.co.uk/)

> Enter a regexp that matches all the items in the first column (positive examples) but none
> of those in the second (negative examples). When you press "submit", you will see what matched.

## Exercise 1:

| Positive | Negative |
| -------- | -------- |
| pit      | pt       |
| spot     | Pot      |
| spate    | peat     |
| slap     | two part |
| respite  |          |

### Regexp: `(s|res)?(la)?p(\s|[a-o])t(e|wo)?`

## Exercise 2:

| Positive   | Negative   |
| ---------- | ---------- |
| rap them   | aleht      |
| tapeth     | happy them |
| apth       | tarpth     |
| wrap/try   | Apt        |
| sap tray   | peth       |
| 87ap9th    | tarreth    |
| apothecary | ddapdg     |
|            | apples     |
|            | shape the  |

### Regexp: `([r-t]|wr|87)?ap(\s|e|/|9|o)?t(h|r)(em|a|ecar)?(y)?`
