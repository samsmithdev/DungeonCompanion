import React from 'react';
import {Text, View} from 'react-native';

type Skill = {
    name: String;
    proficiency: Boolean;
    bonus: String;
};

type CharacterAttributes = {
    strength: Skill;
    dexterity: Skill;
    constitution: Skill;
    intelligence: Skill;
    wisdom: Skill;
    charisma: Skill;
};

type SavingThrows = {
    strength: Skill;
    dexterity: Skill;
    constitution: Skill;
    intelligence: Skill;
    wisdom: Skill;
    charisma: Skill;
};

type Skills {
    acrobatics: Skill;
    animalHandling: Skill;
    arcana: Skill;
    athletics: Skill;
    deception: Skill;
    history: Skill;
    insight: Skill;
    intimidation: Skill;
    investigation: Skill;
    medicine: Skill;
    nature: Skill;
    perception: Skill;
    performance: Skill;
    persuasion: Skill;
    religion: Skill;
    sleightOfHand: Skill;
    stealthh: Skill;
    survival: Skill;
}

type DeathSaves = {
    successOne: Boolean;
    successTwo: Boolean;
    successThree: Boolean;
    failureOne: Boolean;
    failureTwo: Boolean;
    failureThree: Boolean;
};

type Combat = {
    armorClass: Number;
    initiative: Number;
    speed: Number;
    hitPointMaximum: Number;
    hitPointCurrent: Number;
    hitPointTemporary: Number;
    deathSavingThrows: DeathSaves;
    hitDice: String;
    hitDiceTotal: String;
};

type Personality = {
    personalityTraits: String;
    ideals: String;
    bonds: String;
    flaws: String;
}

type Money = {
    copperPieces: Number;
    silverPieces: Number;
    electrumPieces: Number;
    goldPieces: Number;
    platinumPieces: Number;
}

type Appearance = {
    age: Number;
    eyes: String;
    height: String;
    skin: String;
    weight: String;
    hair: String;
    description: String;
}

type AlliesAndOrganizations = {
    description: String;
}

type Spell = {
    name: String;
    level: String;
    school: String;
    castingTime: String;
    range: String;
    duration: String;
    components: String;
    description: String;
}

type SpellLevel = {
    name: String;
    availableSpellSlots: Number;
    expendedSpellSlots: Number;
    spells: Spell[];
}

type Spellcasting = {
    spellcastingClass: String;
    spellcastingAbility: String;
    spellSaveDC: String;
    spellAttackBonus: String;
    levelZeroSpells: SpellLevel;
    levelOneSpells: SpellLevel;
    levelTwoSpells: SpellLevel;
    levelThreeSpells: SpellLevel;
    levelFourSpells: SpellLevel;
    levelFiveSpells: SpellLevel;
    levelSixSpells: SpellLevel;
    levelSevenSpells: SpellLevel;
    levelEightSpellls: SpellLevel;
    levelNineSpells: SpellLevel;
}

type CharacterSheet = {
    characterName: String;
    class: String;
    level: String;
    race: String;
    background: String;
    alignment: String;
    playerName: String;
    inspiration: Number;
    passiveWisdom: Number;
    proficiencyBonus: String; // maybe calculated?
    savingThrows: SavingThrows;
    attributes: CharacterAttributes;
    combat: Combat;
    skills: Skills;
    personality: Personality;
    otherProficienciesAndLanguages: String;
    equipment: String;
    money: Money;
    featuresAndTraits: String;
    appearance: Appearance;
    additionalFeaturesAndTraits: String;
    treasure: String;
    backstory: String;
    allies: AlliesAndOrganizations;
    magic: Spellcasting;
};