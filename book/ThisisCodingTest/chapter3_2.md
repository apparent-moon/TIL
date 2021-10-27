# 큰 수의 법칙

https://github.com/ndb796/python-for-coding-test/blob/master/3/2.java

```java
import java.util.*;

public class Main {
    public int solution(Integer[] arr, int M, int K){
        int answer = 0;

        Arrays.sort(arr, Collections.reverseOrder()); //내림차순정렬

        int first = arr[0];
        int second = arr[1];

        int num = (M/(K+1))*K;
        num += M%(K+1);

        answer += num*first;
        answer += (M-num)*second;

        return answer;
    }

    public static void main(String[] args) {
        Main function = new Main();

        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int M = sc.nextInt(); //M번 더해야함
        int K = sc.nextInt(); //K번까지 더할 수 있다

        Integer[] arr = new Integer[N];

        for(int i = 0;  i < N; i++){
            arr[i] = sc.nextInt();
        }

        System.out.println(function.solution(arr, M ,K));

    }
}

## 회고

1. num값인 제일 큰수를 곱하는 횟수를 구하는게 어려웠다...!