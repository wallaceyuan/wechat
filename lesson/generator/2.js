/**
 * Created by yuan on 2016/7/21.
 */
//ͬʱ��iterator����� next() �����ǿ��Դ���һ�������ġ�������������Ϊgenerator�����ڶ�Ӧ yield ���ķ���ֵ��
function* genFunc () {
    var result = yield 1
    console.log(result)
}
var gen = genFunc()
gen.next() // ��ʱgenerator�ڲ�ִ�е� yield 1 ����ͣ������δ��result��ֵ��
// ��ʹ�첽Ҳ���ԣ�
setTimeout(function () {
    gen.next(123) // ��result��ֵ������ִ�У����: 123
}, 1000)