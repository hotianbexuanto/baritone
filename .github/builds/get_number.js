// Simple build number generator for Baritone
// This script outputs a build number that increments with each build

const build = parseInt(process.env.GITHUB_RUN_NUMBER || "1");
console.log("number=" + build);
