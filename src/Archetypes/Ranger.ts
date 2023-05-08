import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private energyType: EnergyType;
  
  constructor() {
    
  }
}