export type IMainData = IKeys[] 

interface IKeys {
  proyectos: IData[]
  trabajos: IData[]
}

export interface IData {
  title: string,
  description: string ,
  link: string ,
  github: string ,
  image:string,
  tech:string
}
