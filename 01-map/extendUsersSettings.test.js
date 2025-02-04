import { describe, it, expect } from 'vitest';
import extendUsersSettings from './extendUsersSettings';

const USERS = [
  {
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];

describe("extendUsersSettings", () => {
  it("should add id and isEnabled properties to each user", () => {
    const result = extendUsersSettings(USERS);
    expect(result).toEqual([
      {
        ...USERS[0],
        id: 0,
        isEnabled: true,
      },
      {
        ...USERS[1],
        id: 1,
        isEnabled: true,
      },
      {
        ...USERS[2],
        id: 2,
        isEnabled: true,
      },
    ]);
  });

  it("should handle an empty array", () => {
    expect(extendUsersSettings([])).toEqual([]);
  });

  it("should handle a single user", () => {
    const singleUser = [USERS[0]];
    expect(extendUsersSettings(singleUser)).toEqual([
      {
        ...USERS[0],
        id: 0,
        isEnabled: true,
      },
    ]);
  });

  it("should preserve all original user properties", () => {
    const result = extendUsersSettings(USERS);
    USERS.forEach((user, index) => {
      expect(result[index]).toMatchObject(user);
    });
  });

  it("should assign sequential IDs starting from 0", () => {
    const result = extendUsersSettings(USERS);
    result.forEach((user, index) => {
      expect(user.id).toBe(index);
    });
  });
});
