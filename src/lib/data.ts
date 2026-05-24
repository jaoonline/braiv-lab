import { prisma } from './db';
import {
  FALLBACK_PROJECTS,
  FALLBACK_MEMBERS,
  FALLBACK_PUBLICATIONS,
  ProjectData,
  MemberData,
  PublicationData
} from './fallbackData';

export interface DbStatus {
  connected: boolean;
  message: string;
}

export async function checkDbConnection(): Promise<DbStatus> {
  try {
    // Simple query to verify connection
    await prisma.$queryRaw`SELECT 1`;
    return { connected: true, message: 'Connected to PostgreSQL' };
  } catch (error: any) {
    console.warn('PostgreSQL database connection failed. Falling back to static data.', error?.message || error);
    return { 
      connected: false, 
      message: 'Offline (Using static demo data). Set up DATABASE_URL in .env and run migrations.' 
    };
  }
}

export async function getProjects(): Promise<{ data: ProjectData[]; fromDb: boolean }> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    // If the database is connected but contains no projects, we still return them.
    // If it fails completely, we fall back.
    if (projects.length === 0) {
      return { data: FALLBACK_PROJECTS, fromDb: false };
    }
    
    return { data: projects, fromDb: true };
  } catch (error) {
    return { data: FALLBACK_PROJECTS, fromDb: false };
  }
}

export async function getTeamMembers(): Promise<{ data: MemberData[]; fromDb: boolean }> {
  try {
    const members = await prisma.member.findMany({
      orderBy: { orderIndex: 'asc' }
    });
    
    if (members.length === 0) {
      return { data: FALLBACK_MEMBERS, fromDb: false };
    }
    
    return { data: members as MemberData[], fromDb: true };
  } catch (error) {
    return { data: FALLBACK_MEMBERS, fromDb: false };
  }
}

export async function getPublications(): Promise<{ data: PublicationData[]; fromDb: boolean }> {
  try {
    const publications = await prisma.publication.findMany({
      orderBy: { year: 'desc' }
    });
    
    if (publications.length === 0) {
      return { data: FALLBACK_PUBLICATIONS, fromDb: false };
    }
    
    return { data: publications, fromDb: true };
  } catch (error) {
    return { data: FALLBACK_PUBLICATIONS, fromDb: false };
  }
}

export async function createContactMessage(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<{ success: boolean; fromDb: boolean; error?: string }> {
  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });
    return { success: true, fromDb: true };
  } catch (error: any) {
    console.error('Failed to save contact message to database:', error?.message || error);
    // Mock save in memory for development demo
    console.log('Mock-saved contact submission:', { name, email, subject, message });
    return { 
      success: true, 
      fromDb: false, 
      error: 'Saved locally. DB connection failed.' 
    };
  }
}
