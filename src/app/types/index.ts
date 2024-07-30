export interface File {
    id: number;
    filename: string;
    path: string;
    type: string;
    user_id: number;
    created_at: string;
  }
  
  export interface ScheduledFile {
    id: number;
    file_id: number;
    display_time: string;
  }
  