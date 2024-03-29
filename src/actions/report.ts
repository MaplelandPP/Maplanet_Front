'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SERVER_URL = process.env.SERVER_URL;

export default async function ReportCount(user_id: number) {
  const cookiesList = cookies();
  const accessToken = cookiesList.get('Authorization');
  try {
    // PATCH 요청 보내기
    const res = await fetch(`${SERVER_URL}/userprofile/${user_id}/report` as string, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${accessToken?.value}`
      },
      next: { revalidate: 0 }
    });

    if (!res.ok) {
      throw new Error('Failed to increase report count1');
    }
  } catch {
    throw new Error('Failed to increase report count2');
  }
}
