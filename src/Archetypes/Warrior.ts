import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private energyType: EnergyType;
  
  constructor() {
    
  }
}