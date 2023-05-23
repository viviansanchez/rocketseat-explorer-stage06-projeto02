export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
   this.entries = [
      {
      login: 'viviansanchez',
      name: 'Vivian Sanchez',
      public_repos: '49',
      followers: '10'
     },
     {
      login: 'maykbrito', 
      name: 'Mayk Brito',
      public_repos: '76', 
      followers: '12000'
     }
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    })
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
  }

  createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td class="user">
          <img
          src="https://github.com/viviansanchez.png"
          alt="Imagem de viviansanchez"
          />
          <a href="https://github.com/viviansanchez" target="_blank">
            <p>Vivian Sanchez</p>
            <span>viviansanchez</span>
          </a>
        </td>
        <td class="repositories">49</td>
        <td class="followers">10</td>
        <td><button class="remove">&times;</button></td>
    `
    return tr
  }
}


