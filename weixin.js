/**
 * Created by yuan on 2016/7/21.
 */
exports.reply = function* (next){

    var message = this.weixin
    if(message.msgType === 'event'){
        if(message.Event === 'subscribe'){
            if(message.EventKey){
                console.log('ɨ��ά�������'+message.EventKey+ ' ' + message.ticket);
            }
            this.body ='�������㶩����һ��΢�ź�\r\n' +'��ϢID:' +message.MsgId
        }else if(message.Event === 'unsubscribe'){
            console.log('����ȡ��');
        }
    }


}