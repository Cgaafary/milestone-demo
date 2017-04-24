export const getObjectById = (id, objects) => {
        let arrayOfObjectIds = objects.map(object => object.id);
        let indexOfId = arrayOfObjectIds.indexOf(id);
        return objects[indexOfId];
    }