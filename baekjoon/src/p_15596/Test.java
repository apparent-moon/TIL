package p_15596;

public class Test {
	
	    long sum(int[] a) {
	        long ans = 0; // long타입이고 ans라는 이름을 가진 변수
	        
	        for(int i = 0; i < a.length; i++){
	            ans = ans + a[i];
	        }
	        
	        return ans;
	} // sum이라는 이름을 가진 메소드이고 타입은 long타입
}
