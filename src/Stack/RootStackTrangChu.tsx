import Thongbao from "../screen/TrangChu/Thongbao";
import TrangChu from "../screen/TrangChu/Trangchu";
import Report from "../screen/TrangChu/Report";
export enum RootStackTrangChuEnum {
    TrangChu = 'TrangChu',
    ThongBao = 'ThongBao',
    Report = 'Report'
}

export type RootStackParamListTrangChu = {
    TrangChu: undefined,
    ThongBao: undefined,
    Report: undefined
}


export const RootStackTrangChu = () => {
    const Screen: any = [
        { id: 1, name: RootStackTrangChuEnum.TrangChu, component: TrangChu, options: {} },
        { id: 2, name: RootStackTrangChuEnum.ThongBao, component: Thongbao, options: {} },
        { id: 3, name: RootStackTrangChuEnum.Report, component: Report, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}