import TrangChu from "../screen/TrangChu/Trangchu";

export enum RootStackTrangChuEnum {
    TrangChu = 'TrangChu',
}

export type RootStackParamListTrangChu = {
    TrangChu: undefined,
}


export const RootStackTrangChu = () => {
    const Screen: any = [
        { id: 1, name: RootStackTrangChuEnum.TrangChu, component: TrangChu, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}