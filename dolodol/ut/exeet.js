function showLeaderboard() {
  const leaderboardData = getLeaderboardData();
  const table = document.createElement('table');
  table.className = 'leaderboard';

  const headerRow = document.createElement('tr');
  headerRow.className = 'header-row';
  const headers = ['Rank', 'Name', 'Score'];
  headers.forEach(headerText => {
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  leaderboardData.forEach((player, index) => {
    const bodyRow = document.createElement('tr');
    bodyRow.className = 'body-row';
    const rankCell = document.createElement('td');
    rankCell.textContent = index + 1;
    const nameCell = document.createElement('td');
    nameCell.textContent = player.name;
    const scoreCell = document.createElement('td');
    scoreCell.textContent = player.score;
    [rankCell, nameCell, scoreCell].forEach(cell => bodyRow.appendChild(cell));
    table.appendChild(bodyRow);
  });

  document.body.appendChild(table);
}
