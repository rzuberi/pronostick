export const fetchGames = async () => {
  const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY
  return await fetch('https://v3.football.api-sports.io/fixtures?date=2021-07-16&timezone=Europe/Paris', {
    method: 'GET',
    headers: { 'x-rapidapi-host': 'v3.football.api-sports.io', 'x-rapidapi-key': FOOTBALL_API_KEY },
  })
    .then((res) => res.json())
    .then(
      async (result) => {
        console.log(result.response)
        return result.response
      },
      (error) => {
        console.log(error)
        return error
      },
    )
}
