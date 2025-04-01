import {axiosInstance} from './axios'
import {ApiRouts} from './constants'
import {Ingredient} from '@prisma/client'

export const getAll = async  ():Promise<Ingredient[]> => {
	return (await axiosInstance.get<Ingredient[]>(ApiRouts.INGREDIENTS)).data
}