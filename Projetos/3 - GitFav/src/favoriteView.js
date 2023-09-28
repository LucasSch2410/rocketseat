import { GithubUser } from "./github.js"


// classe que trabalha com os elementos e os dados
export class favorite {
    constructor(root){
        this.root = document.querySelector(root)

        this.load()
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    entries = []

    async add(user){
        try {
            const userExists = this.entries.find(entry => entry.login === user)

            if (userExists){
                throw new Error('Usuário já consta na tabela!')
            }
                    
            const githubEntry = await GithubUser.search(user)

            if(githubEntry.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [githubEntry, ...this.entries]
            this.update()
            this.save()

        } catch (error) {
            alert(error.message)
        }

    }


    delete(user) {
        let filteredEntries = this.entries
        .filter(entry => entry.login != user.login)

        this.entries = filteredEntries

        this.update()
        this.save()

    }
}


// classe que renderiza os elementos

export class favoriteView extends favorite {
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()

    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.public_repos').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk) {
                  this.delete(user)
                }
              }
              
            this.tbody.append(row)
        });
    }


    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
          const { value } = this.root.querySelector('.search input')
    
          this.add(value)
        }
      }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `<td class="user">
        <img src="https://github.com/maykbrito.png" alt="">
        <a href="">
            <p>Lucas Schroeder</p>
            <span>LucasSch2410</span>
        </a>
    </td>
    <td class="public_repos">120</td>
    <td class="followers">120000</td>
    <td>
        <button class="remove">Remover</button>
    </td>`

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        });
    }

}
