/**
 * Created by yuan on 2016/7/26.
 */
'use strict'

exports.button = {
    "button":[{
        "type":"click",
        "name":"���ո���",
        "key":"V1001_TODAY_MUSIC"
    }, {
        "name":"�˵�",
        "sub_button": [
            {
                "type": "pic_sysphoto",
                "name": "ϵͳ���շ�ͼ",
                "key": "rselfmenu_1_0",
                "sub_button": [ ]
            },
            {
                "type": "pic_photo_or_album",
                "name": "���ջ�����ᷢͼ",
                "key": "rselfmenu_1_1",
                "sub_button": [ ]
            },
            {
                "type": "pic_weixin",
                "name": "΢����ᷢͼ",
                "key": "rselfmenu_1_2",
                "sub_button": [ ]
            }
        ]
    }, {
        "name":"�˵�",
        "sub_button": [
            {
                "name": "����λ��",
                "type": "location_select",
                "key": "rselfmenu_2_0"
            },
            {
                "type": "media_id",
                "name": "ͼƬ",
                "media_id": "MEDIA_ID1"
            },
            {
                "type": "view_limited",
                "name": "ͼ����Ϣ",
                "media_id": "MEDIA_ID2"
            }
        ]
    }]
}
