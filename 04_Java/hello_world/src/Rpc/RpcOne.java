package Rpc;

import java.util.Scanner;

public class RpcOne {

		void run() {
		System.out.println("==���� ���� ��==");
		int com = (int)(Math.random() * 3 + 1);
		int player = 1;
		
		System.out.println("���� ���� �� �� �ϳ��� �Է��ϼ���");
		Scanner sc = new Scanner(System.in);
		//�ڵ� ����Ʈ ����Ű : ctrl + shift + o (������ ��) << �ܿ��ߴ�
		String cmd = sc.next();
		
		String r = "";
		
		switch(cmd) {
		case "����":
			System.out.println("������ ����");
			switch(com) {
			case 1:
				r = "���";
				break;
			
			case 2:
				r = "�й�";
				break;
				
			case 3:
				r = "�¸�";
				break;				
			}
			break;
			
		case "����":
			System.out.println("������ ����");
			switch(com) {
			case 1:
				r = "�¸�";
				break;
				
			case 2:
				r = "���";
				break;
				
			case 3:
				r = "�й�";
				break;				
			}
			break;
			
		case "��":
			System.out.println("���� ����");
			switch(com) {
			case 1:
				r = "�й�";
				break;
				
			case 2:
				r = "�¸�";
				break;
				
			case 3:
				r = "���";
				break;				
			}
			break;
		default:
			System.out.println("�߸� �½��ϴ�.");
			break;
		}	
		System.out.println("���:"+r);
	}
}