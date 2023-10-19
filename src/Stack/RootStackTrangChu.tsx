import Thongbao from "../screen/TrangChu/Thongbao";
import TrangChu from "../screen/TrangChu/Trangchu";

export enum RootStackTrangChuEnum {
    TrangChu = 'TrangChu',
    ThongBao = 'ThongBao',
}

export type RootStackParamListTrangChu = {
    TrangChu: undefined,
    ThongBao: undefined,
}


export const RootStackTrangChu = () => {
    const Screen: any = [
        { id: 1, name: RootStackTrangChuEnum.TrangChu, component: TrangChu, options: {} },
        { id: 2, name: RootStackTrangChuEnum.ThongBao, component: Thongbao, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}