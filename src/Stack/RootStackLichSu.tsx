import LichSu from "../screen/LichSu/Lichsu";
import Lichsu_Chitiet from "../screen/LichSu/Lichsu_Chitiet";

export enum RootStackLichSuEnum {
    LichSu = 'LichSu',
    LichSu_ChiTiet = 'LichSu_ChiTiet'
}

export type RootStackParamListLichSu = {
    LichSu: undefined,
    LichSu_ChiTiet: undefined
}


export const RootStackLichsu = () => {
    const Screen: any = [
        { id: 1, name: RootStackLichSuEnum.LichSu, component: LichSu, options: {} },
        { id: 2, name: RootStackLichSuEnum.LichSu_ChiTiet, component: Lichsu_Chitiet, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}