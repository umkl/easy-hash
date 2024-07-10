import crypto from "crypto";

export function generateHash() {
	const hash1 = generateRandomHashSegment();
	const hash2 = generateRandomHashSegment();
	const hash3 = generateRandomHashSegment();
	return `${hash1}-${hash2}-${hash3}`;
}

function generateRandomHashSegment() {
	const randomData = crypto.randomBytes(256);
	const fullHash = crypto.createHash("sha256").update(randomData).digest("hex");
	return fullHash.substring(0, 10);
}
