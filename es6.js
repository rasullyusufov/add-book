const form = document.getElementById('form')
const kitobNomi = document.getElementById('kitobNomi')
const muallif = document.getElementById('muallif')
const sana = document.getElementById('sana')
const kitobList = document.getElementById('kitob-list')


class Kitob {
    constructor(kitobNomi, muallif, sana) {
        this.kitobNomi = kitobNomi
        this.muallif = muallif
        this.sana = sana
    }
}

class UI extends Kitob {
    constructor() {
        super(kitobNomi, muallif, sana)
    }


    //kitobni jadvalga qo'shish 

    addbook(kitob) {
        const row = document.createElement('tr')
        row.innerHTML = `
    <td>${kitob.kitobNomi}</td>
    <td>${kitob.muallif}</td>
    <td>${kitob.sana}</td>
    <td><i class="fas fa-times"></i></td>
    `
        kitobList.appendChild(row)
    }
    // show massage

    showMessage(massage, className) {
        const Alert = document.createElement('div')
        Alert.classList = `alert alert-${className}`
        Alert.textContent = massage

        const containerMine = document.querySelector('.containerMine ')
        containerMine.insertBefore(Alert, form)
        setTimeout(function () {
            document.querySelector('.alert').remove()
        }, 3000);
    }

    //claar input
    claerInput() {
        kitobNomi.value = ''
        muallif.value = ''
        sana.value = ''
    }
    //deletebBook
    deleteBook(target) {
        if (target.classList == 'fas fa-times') {
            target.parentElement.parentElement.remove()
        }
    }
}



form.addEventListener('submit', function (e) {
    e.preventDefault()
    const kitob = new Kitob(kitobNomi.value, muallif.value, sana.value)
    const toui = new UI()
    if (kitobNomi.value == '' || muallif.value == '' || sana.value == '') {
        toui.showMessage(`To'liq to'ldirilmadi !!!`, 'danger')
    }
    else {
        toui.showMessage(`Kitob qo'shildi`, 'success')
        toui.addbook(kitob)
        toui.claerInput()
    }

})


kitobList.addEventListener('click', function (e) {
    const toui = new UI()
    toui.deleteBook(e.target)
    toui.showMessage(`Kitob o'chirildi.`, 'warning')
})

