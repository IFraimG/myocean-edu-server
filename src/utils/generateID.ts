import { v4 as uuidv4 } from 'uuid';

export const generateID = (anyService: any) => {
    let uuid = uuidv4()
    if (anyService == null) return uuid

    let isId = anyService.findOne({where: {id: uuid}})
    while (isId != null) {
        isId = anyService.findOne({where: {id: uuid}})
        if (isId != null) uuid = uuidv4()
    }

    return uuid
}