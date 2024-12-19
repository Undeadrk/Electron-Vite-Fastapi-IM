export class SessionItem {

    sessionID: number;
    sessionName: string;
    sessionDate: string;
    sessionLastMessage: string;

    constructor(public id: number, public name: string, public date: string, public lastMessage: string){
        this.sessionID = id;
        this.sessionName = name;
        this.sessionDate = date;
        this.sessionLastMessage = lastMessage;
    }

}


