/**
 * Created by yuan on 2016/7/21.
 */
//���������һ���������� next()��ÿ������� next() ��ʱ��generator�����ڲ��ͻ�ִ��ֱ��������һ�� yield ��䣬Ȼ����ͣ�����������һ��������������б� yield ��ֵ��generator����������״̬��
function* genFunc () {
    console.log('step 1')
    yield 1
    console.log('step 2')
    yield 2
    console.log('step 3')
    return 3
}

var gen = genFunc();

//var ret = gen.next()

var ret = gen.next()
console.log(ret.value)
console.log(ret.done)


ret = gen.next()
console.log(ret.value)
console.log(ret.done)


