// 데이터를 처리하는 로직을 별도의 파일로 분리하여 API처럼 사용하기 위함

import menus from "../data/Menu-detail.json";

// 1. 메뉴 전체 반환
export function getMenuList()
{
    return menus;
}

// 디테일 페이지 함수
export function getMenuDetail(id)
{
    return menus.filter(menu => menu.id === parseInt(id))[0];
} 