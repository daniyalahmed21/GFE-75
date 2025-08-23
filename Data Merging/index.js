export default function mergeData(sessions) {
  const userMap = new Map();

  sessions.forEach(({ user, duration, equipment }) => {
    if (!userMap.has(user)) {
      userMap.set(user, { user, duration: 0, equipment: new Set() });
    }

    const userData = userMap.get(user);
    userData.duration += duration;

    equipment.forEach((item) => userData.equipment.add(item));
    // console.log(userMap);
  });

  return Array.from(userMap.values()).map((u) => ({
    user: u.user,
    duration: u.duration,
    equipment: [...u.equipment].sort(), 
  }));
}

const data = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];
console.log(mergeData(data));
