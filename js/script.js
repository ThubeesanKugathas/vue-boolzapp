new Vue({
    el: '#app',
    data: {
        // index per riferimento al metodo per switchare chat
        currentCounterIndex: 0,
        contacts: [
            // primo contatto
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            // secondo contatto
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            // terzo contatto
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            // quarto contatto
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        temporaryInput: {
            date: '01/01/2022 00:00:00',
            text: '',
            status: 'sent'
        },
        replyInput: {
            date: '01/01/2022 00:00:00',
            text: 'okay',
            status: 'received'
        },
        replyTime: 0,
        filterInput: '',
        active: false,
    },
    methods: {
        chooseChat: function(i) {
            this.currentCounterIndex = i;
        },
        sendMessage: function(i) {
            // if per controllare che non partino messaggi vuoti
            if (this.temporaryInput.text.length > 0) {
                this.contacts[i].messages.push(this.temporaryInput);
                // reset input space
                this.temporaryInput = {
                    date: '01/01/2022 00:00:00',
                    text: '',
                    status: 'sent'
                }
                // risposta automatica al message mandato
                let message = this
                this.replyTime = setTimeout(function() {
                    message.automaticReply(i); //si riferisce sempre all'index ''currentIndex...''
                }, 1000)
            }
        },
        automaticReply: function(i) {
            this.contacts[i].messages.push(this.replyInput);
        },
        // filteredList: function() {
        //     if(this.filterInput) {
        //         return this.contacts.filter((contact) => {
        //             contact.name.startWith(this.filterInput);
        //         });
        //     } else {
        //         return this.contacts;
        //     }
        // }
    },
});

/*
Milestone 4
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
 vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
 (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
1- Cancella messaggio: cliccando sul messaggio appare un menu
 a tendina che permette di cancellare il messaggio selezionato
2- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
*/