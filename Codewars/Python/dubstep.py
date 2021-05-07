def song_decoder(song):
  song = song.split("WUB")
  initialSong = ""
  for elem in song:
    if elem != "":
      initialSong += elem + " "
  return initialSong[0:-1]

print(song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

# The best:
def song_decoder(song):
  return " ".join(song.replace('WUB', ' ').split())

# Kata Link: https://www.codewars.com/kata/551dc350bf4e526099000ae5
