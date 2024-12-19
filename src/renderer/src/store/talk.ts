import { reactive } from "vue";
import { defineStore } from "pinia";




export const useTalkStore = defineStore("talk", () => {

    const talkList = reactive(
        JSON.parse(localStorage.getItem("talk") || "[]")
    );
    async function addTalk(talk: any) {
        talkList.push(talk);
        localStorage.setItem("talk", JSON.stringify(talkList));
    }

    return {talkList, addTalk};


});

