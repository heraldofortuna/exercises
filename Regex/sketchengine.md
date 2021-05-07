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

## Exercise 3:

| Positive  | Negative |
| --------- | -------- |
| affgfking | fgok     |
| rafgkahe  | a fgk    |
| bafghk    | affgm    |
| baffgkit  | afffhk   |
| affgfking | fgok     |
| rafgkahe  | afg.K    |
| bafghk    | aff gm   |
| baffg kit | afffhgk  |

### Regexp: `(r|b)?af(f)?g(f|h|\s)?ki?(ng|t|ahe)?`

## Additional regular expression exercises

In all of the below, the question is, does the regular expression match the full string. This can be fully specified by preceding the regular expression with ^ (beginning-of-string character) and and following it with $ (end-of-string character); to aid legibility, we have nto included these characters. Slash (/) is the delimiter character showing where the regular expression begins and ends. Strings to be matched start and end with non-blank characters: there are no leading or trailing blanks.

### 1 Which of the following matches regexp /a(ab)\*a/

1. abababa
2. aaba
3. aabbaa
4. aba
5. aabababa

### 2 Which of the following matches regexp /ab+c?/

1. abc
2. ac
3. abbb
4. bbc

### 3 Which of the following matches regexp /a.[bc]+/

1. abc
2. abbbbbbbb
3. azc
4. abcbcbcbc
5. ac
6. asccbbbbcbcccc

### 4 Which of the following matches regexp /abc|xyz/

1. abc
2. xyz
3. abc|xyz

### 5 Which of the following matches regexp /[a-z]+[\.\?!]/

1. battle!
2. Hot
3. green
4. swamping.
5. jump up.
6. undulate?
7. is.?

### 6 Which of the following matches regexp /[a-zA-Z]\*[^,]=/

1. Butt=
2. BotHEr,=
3. Ample
4. FIdDlE7h=
5. Brittle =
6. Other.=

### 7 Which of the following matches regexp /[a-z][\.\?!]\s+[A-Z]/

(\s matches any space character)

1. A. B
2. c! d
3. e f
4. g. H
5. i? J
6. k L

### 8 Which of the following matches regexp /(very )+(fat )?(tall|ugly) man/

1. very fat man
2. fat tall man
3. very very fat ugly man
4. very very very tall man

### 9 Which of the following matches regexp /<[^>]+>/

1. <an xml tag>
2. <opentag> <closetag>
3. </closetag>
4. <>
5. <with attribute=”77”>
