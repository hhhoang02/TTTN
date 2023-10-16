import LichSu from "../screen/LichSu/Lichsu";

export enum RootStackLichSuEnum {
    LichSu = 'LichSu',
}

export type RootStackParamListLichSu = {
    LichSu: undefined,
}


export const RootStackLichsu = () => {
    const Screen: any = [
        { id: 1, name: RootStackLichSuEnum.LichSu, component: LichSu, options: {} },
    ]
    return Screen;
}

export const configStack = ({ props }: any) => {
    return {
        headerShown: false,
    }
}