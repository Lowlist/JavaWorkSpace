package Rpc;

import java.util.Scanner;

public class RpcOne {

		void run() {
		System.out.println("==가위 바위 보==");
		int com = (int)(Math.random() * 3 + 1);
		int player = 1;
		
		System.out.println("가위 바위 보 중 하나를 입력하세요");
		Scanner sc = new Scanner(System.in);
		//자동 임포트 단축키 : ctrl + shift + o (영문자 오) << 외워야댐
		String cmd = sc.next();
		
		String r = "";
		
		switch(cmd) {
		case "가위":
			System.out.println("가위를 냈음");
			switch(com) {
			case 1:
				r = "비김";
				break;
			
			case 2:
				r = "패배";
				break;
				
			case 3:
				r = "승리";
				break;				
			}
			break;
			
		case "바위":
			System.out.println("바위를 냈음");
			switch(com) {
			case 1:
				r = "승리";
				break;
				
			case 2:
				r = "비김";
				break;
				
			case 3:
				r = "패배";
				break;				
			}
			break;
			
		case "보":
			System.out.println("보를 냈음");
			switch(com) {
			case 1:
				r = "패배";
				break;
				
			case 2:
				r = "승리";
				break;
				
			case 3:
				r = "비김";
				break;				
			}
			break;
		default:
			System.out.println("잘못 냈습니다.");
			break;
		}	
		System.out.println("결과:"+r);
	}
}
