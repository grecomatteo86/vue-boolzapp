var app = new Vue (
  {
    el:'#app',
    data:{
      userChat:'',
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luigi',
          avatar: '_4',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
          ],
        },
      ],
      chatIndex:0,
      userFinder:''
    },
    methods:{
      addChat: function(item){
        var now = dayjs();
        // var creation bacause the this
        const contacts = this.contacts;
        const chatIndex = this.chatIndex;
        // var creation bacause the this
        if (this.userChat != ""){
          // automatic_answer_timing_function
          setTimeout(answer,1000);
          function answer() {
            var ansObj = {};
            ansObj.date = now;
            ansObj.message = 'ok';
            ansObj.status = 'received';
            console.log(ansObj);
            contacts[chatIndex].messages.push(ansObj);
          }
          // automatic_answer_timing_function
          console.log(this.userChat);
          var newObj = {};
          // new object creation
          newObj.date = now;
          newObj.message = this.userChat;
          newObj.status = 'sent';
          // new object creation
          contacts[chatIndex].messages.push(newObj);
          this.userChat = "";
        }
      },
      chatFinder:function(){
        if (this.userFinder != "") {
          // console.log(this.userFinder);
          let userInput = this.userFinder;
          // console.log(this.contacts[0].name);
          this.contacts.forEach((item) => {
            // console.log(item.name);      mi stampa tutti i nomi


            // console.log(item.visible);    mi stampa le 4 visibilità

            for(var i = 0; i < item.name.length; i++) {
              // console.log(item.name[i]);  mi stampa tutti nomi array like
              if (item.name[i].includes(userInput)) {
                // console.log(userInput);
                item.visible = true;
              } else {
                item.visible = false;
              }
            }
          });
        }
      }
    }
  }
);
