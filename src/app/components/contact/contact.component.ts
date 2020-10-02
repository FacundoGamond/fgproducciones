import { Component, OnInit } from '@angular/core';
import ScrollOut from "scroll-out";
import swal from 'sweetalert';

import { Email } from '../../models/email';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MailService]
})
export class ContactComponent implements OnInit {
  public emailData: Email;
  public text: string;
  public sended: boolean;
  constructor(
    private _mailService: MailService
  ) {
    this.emailData = new Email("", "", "", 0)
    this.sended = true;
  }

  ngOnInit(): void {
    ScrollOut({
      targets: '#contact-all'
    })
  }

  onSubmit(form) {
    this.sended = false;
    var date = String(new Date);
    this._mailService.sendEmail(this.emailData).subscribe(
      res => {
        if (res) {
          swal({
            title: "Consulta enviada!",
            text: "Nuestros acesores se pondran en contacto a la brevedad!",
            icon: "success"
          });

          this.sended = true;
          $('html, body').animate({
            scrollTop: top
          }, 0);
          
        }
      },
      err => {
        console.log(err);
        swal({
          title: "Consulta no enviada!",
          text: "Ocurrio un error, intentelo más tarde",
          icon: "error"
        });
        this.sended = true;
      });
      form.reset();
  }


}
